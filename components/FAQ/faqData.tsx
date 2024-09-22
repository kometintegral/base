import { FaqData } from "@/types/faq";

const faqData = [
  {
    id: 1,
    quest: "Apa itu KOMET?",
    ans: (
      <>
        KOMET atau kepanjangan dari Kompetisi Matematika merupakan event tahunan yang diselenggarakan oleh <strong>HMPS "Integral" Matematika UIN Maulana Malik Ibrahim Malang</strong> sebagai ajang kompetisi yang ditujukan kepada pelajar SMA/SMK/MA/MAK sederajat serta memperkenalkan program studi Matematika UIN Maulana Malik Ibrahim Malang kepada Khalayak umum.
      </>
    ),
  },
  {
    id: 2,
    quest: "Apa Benefit Mengikuti KOMET?",
    ans: (
      <>
        Manfaat mengikuti KOMET antara lain :
        <ul className="list-decimal list-inside">
          <li>Menambah pengetahuan mengenai ilmu Matematika.</li>
          <li>Meningkatkan minat peserta dalam menguasai dan mendalami bidang ilmu matematika dan penerapannya dalam kehidupan.</li>
          <li>Meningkatkan pemahaman konsep matematis dan menerapkannya dalam kehidupan sehari-hari.</li>
          <li>Menciptakan pola pikir yang aktif, rasionalis, sistematis, dan matematis.</li>
          <li>Menumbuhkan jiwa sportivitas dan semangat dalam berkompetisi.</li>
          <li>Menambah pengalaman berkompetisi dan relasi dari pelajar seluruh Indonesia.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    quest: "Dimana KOMET dilaksanakan?",
    ans: (
      <>
        KOMET dilaksanakan secara online untuk seluruh wilayah Indonesia.
      </>
    ),
  },
  {
    id: 4,
    quest: "Bagaimana Cara untuk Mendaftar KOMET?",
    ans: (
      <>
        Untuk cara pendaftaran KOMET dapat dilihat melalui GUIDEBOOK dan bisa mendaftar langsung melalui klik Login
      </>
    ),
  }
];

export default faqData;
