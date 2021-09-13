import {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
} from "../data";

const INITIAL_STATE = {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
};


export const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "GİRİŞ":
      {
        state.personel.find((perns) => perns.kullanıcıAdı === action.gkullanıcı)
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? console.log("giriş başarılı")
            : alert("şifre hatalı")
          : alert("kullanıcı adı hatalı");
      }

      return {
        ...state,

        kullanıcı: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? state.personel.find(
                (perns) => perns.kullanıcıAdı === action.gkullanıcı
              )
            : { ...state.kullanıcı }
          : { ...state.kullanıcı },

        giriş: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? true
            : false
          : false,
      };

    case "KALK":
      return {
        ...state,
        giriş: false,
      };

    case "SIL":
      return {
        ...state,
        alınıyor: state.alınıyor.find((sil) => sil.id === action.payload)
          ? state.alınıyor.filter((filt) => filt.id !== action.payload)
          : [...state.alınıyor],
      };

    case "ALINIYOR":
      console.log(action)
      return {
        ...state,
        alınıyor: [...state.alınıyor, action.payload]
      
      };

    case "YENI_URUN":
      return {
        ...state,

        alınıyor: [alınıyor.filter((saas) => saas.id !== action.payload.id)],
      };

    case "SINIF":
      return {
        ...state,

        sınıflar: [...sınıflar, action.payload],
      };
    case "BİRİM":
      return {
        ...state,

        birimler: [...birimler, action.payload],
      };

    case "YENİ_ÜRÜN_EKLE":
      console.log(action);

      action.id === ""
        ? alert("Lütfen Seri No giriniz")
        : state.data.find((item) => item.id === action.id)
        ? alert("Bu Seri No zaten kullanılıyor. Lütfen Benzersiz bir Seri No giriniz.")
        : action.ad === ""
        ? alert("Lütfen Ürün Adı giriniz")
        : action.snf === ""
        ? alert("Lütfen Birim seçiniz. Listede yoksa Yeni Birim ekleyip seçiniz.")
        : action.brm === ""
        ? alert("Lütfen Sınıf seçiniz. Listede yoksa Yeni Sınıf ekleyip seçiniz.")
        : action.foto === ""
        ? alert("Lütfen Fotoğraf Linki giriniz")
        : console.log("oldu");

      return {
        ...state,


        data:
          action.id === ""
            ? [...data]
            : state.data.find((item) => item.id === action.id)
            ? [...data]
            : action.ad === ""
            ? [...data]
            : action.snf === ""
            ? [...data]
            : action.brm === ""
            ? [...data]
            : action.foto === ""
            ? [...data]
            : [
                ...data,
                {
                  id: action.id,
                  ürün: action.ad,
                  sınıf: action.snf,
                  birim: action.brm,
                  fotograf: action.foto,
                  stok: 0,
                },
              ],
      };

    default:
      return state;
  }
};
