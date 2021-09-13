// export const sepeteEkle = (book) => {
//   return { type: "SEPETE_EKLE", payload: book };
// };
// export const sepetteEksilt = (book) => {
//   return { type: "SEPETTE_EKSİLT", payload: book };
// };
// export const sepettenCıkar = (book) => {
//   return { type: "SEPETTEN_CIKAR", payload: book };
// };

export const giriş = (eventq, gkullanıcı, gşifre) => {
  return { type: "GİRİŞ", payload: eventq, gkullanıcı, gşifre };
};

export const kalk = (eventq) => {
  return { type: "KALK", payload: eventq };
};

export const sil = (eventq) => {
  return { type: "SIL", payload: eventq };
};

export const alınıyor = (eventq) => {
  return { type: "ALINIYOR", payload: eventq };
};

export const yeniUrun = (eventq) => {
  return { type: "YENI_URUN", payload: eventq };
};

export const sınıf = (eventq) => {
  return { type: "SINIF", payload: eventq };
};

export const birim = (eventq) => {
  return { type: "BİRİM", payload: eventq };
};
export const yeniÜrünEkle = (even, id, ad, brm, snf, foto) => {
  return { type: "YENİ_ÜRÜN_EKLE", payload: even, id, ad, brm, snf, foto };
};



