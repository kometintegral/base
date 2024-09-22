"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const PricingKOMET = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Harga Pendaftaran`,
                subtitle: `Kompetisi Matematika`,
                description: `Merupakan event perlombaan yang mengasah pengetahuan seputar Matematika melalui soal-soal Olimpiade berskala nasional yang diikuti oleh pelajar SMA/MA/SMK/sederajat se-Indonesia.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                60K{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /peserta
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Gelombang Pertama
              </h4>
              <p>16 Ags - 15 Sep 2024</p>
              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Golden Ticket (10 Top Winner)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Piala Bergilir
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Medali
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Sertifikat Semua Peserta
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Uang Pembinaan (Winner)
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                65K{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /peserta
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Gelombang Kedua
              </h4>
              <p>16 Sep - 04 Nov 2024</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Golden Ticket (10 Top Winner)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Piala Bergilir
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Medali
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Sertifikat Semua Peserta
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Uang Pembinaan (Winner)
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                Coming Soon
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                
              </h4>
              <p></p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default PricingKOMET;
