"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhatIsKOMET = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0" id="about">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              About KOMET
            </h2>
            <p className="mx-auto lg:w-11/12">
            Kompetisi Matematika atau disingkat KOMET merupakan suatu event perlombaan berskala nasional yang diadakan oleh Himpunan Mahasiswa Jurusan (HMPS) “Integral” Matematika Universitas Islam Negeri Maulana Malik Ibrahim Malang.
            </p>
            <br></br>
            <p className="mx-auto lg:w-11/12">
            Kompetisi ini diikuti oleh pelajar SMA/SMK/MA/MAK sederajat yang dikemas dengan serangkaian lomba yang akan mengasah pengetahuan siswa seputar matematika. Adapun untuk perlombaan yang ada dalam kompetisi ini yakni Olimpiade Matematika.
            KOMET bertujuan untuk mengenalkan Program Studi Matematika UIN Maulana Malik Ibrahim Malang kepada pelajar SMA/SMK/MA/MAK sederajat dalam skala nasional.
            </p>
            <br></br>
            <p className="mx-auto lg:w-11/12">
            KOMET bertujuan untuk mengenalkan Program Studi Matematika UIN Maulana Malik Ibrahim Malang kepada pelajar SMA/SMK/MA/MAK sederajat dalam skala nasional.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                16
              </h3>
              <p className="text-lg lg:text-para2">Date</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                November
              </h3>
              <p className="text-lg lg:text-para2">Month</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                2024
              </h3>
              <p className="text-lg lg:text-para2">Year</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default WhatIsKOMET;
