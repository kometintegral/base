"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection" id="footer">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={220}
                    height={160}
                    src="/images/logo/logo-komet.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={220}
                    height={160}
                    src="/images/logo/logo-komet.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                Program Studi Matematika, Universitas Islam Negeri Maulana Malik Ibrahim Malang, Jl. Gajayana No. 50, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <a
                  href="mailto:kometuinmaliki@gmail.com"
                  className="text-item font-large text-black dark:text-white"
                >
                  kometuinmaliki@gmail.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="https://bit.ly/GUIDEBOOKPESERTAKOMETXXIV"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Guidebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bit.ly/ProposalSponsorKOMETXXIV"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Proposal Sponsorship
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://whatsapp.com/channel/0029Vag7MMN4CrfaAVYp3L42"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Channel Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1A75hhaVGLcinYc9UkOC5XBeQeMkDFvOG/view?usp=drivesdk"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Pamflet Olimpiade KOMET
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Pamflet Seminar Nasional
                      </a>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                    Contact Person
                  </h4>
                  <ul>
                      <li>
                        <a href="https://wa.me/6285779409420" className="mb-3 inline-block hover:text-primary">
                          CP | Nur Ula
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/6285933834013" className="mb-3 inline-block hover:text-primary">
                          CP | Renata
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/6282132103809" className="mb-3 inline-block hover:text-primary">
                          Medpart | Gabie
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/6285762480109" className="mb-3 inline-block hover:text-primary">
                          Sponsorship | Nevanda
                        </a>
                      </li>
                    </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="https://uin-malang.ac.id/" className="hover:text-primary">
                    UIN Maliki Malang
                  </a>
                </li>
                <li>
                  <a href="https://matematika.uin-malang.ac.id/" className="hover:text-primary">
                    Prodi Matematika
                  </a>
                </li>
              </ul>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                Powered by Serahin Technology in collaboration with IT KOMET &copy; {new Date().getFullYear()} 
              </p>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                          <li>
              <a href="https://www.instagram.com/kometuinmaliki/" aria-label="instagram">
                <svg
                  className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.796.246 2.22.415.524.204.903.45 1.3.847.397.397.643.776.847 1.3.17.424.36 1.05.415 2.22.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.796-.415 2.22-.204.524-.45.903-.847 1.3-.397.397-.776.643-1.3.847-.424.17-1.05.36-2.22.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.796-.246-2.22-.415-.524-.204-.903-.45-1.3-.847-.397-.397-.643-.776-.847-1.3-.17-.424-.36-1.05-.415-2.22-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.246-1.796.415-2.22.204-.524.45-.903.847-1.3.397-.397.776-.643 1.3-.847.424-.17 1.05-.36 2.22-.415C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.014 7.053.072 5.78.13 4.733.35 3.873.654c-.857.304-1.584.735-2.316 1.468C.832 2.841.4 3.569.096 4.426c-.303.86-.524 1.907-.582 3.18C.014 8.333 0 8.735 0 12c0 3.265.014 3.668.072 4.947.058 1.273.278 2.32.582 3.18.304.857.735 1.584 1.468 2.316.732.732 1.46 1.164 2.316 1.468.86.303 1.907.524 3.18.582 1.273.058 1.675.072 4.947.072s3.668-.014 4.947-.072c1.273-.058 2.32-.278 3.18-.582.857-.304 1.584-.735 2.316-1.468.732-.732 1.164-1.46 1.468-2.316.303-.86.524-1.907.582-3.18.058-1.273.072-1.675.072-4.947 0-3.265-.014-3.668-.072-4.947-.058-1.273-.278-2.32-.582-3.18-.304-.857-.735-1.584-1.468-2.316-.732-.732-1.46-1.164-2.316-1.468-.86-.303-1.907-.524-3.18-.582C15.668.014 15.265 0 12 0z"
                    fill=""
                  />
                  <circle cx="12" cy="12" r="3.594" />
                  <path d="M18.406 5.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </li>
            <li>
            <a href="https://www.tiktok.com/@kometuinmaliki" aria-label="tiktok">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@matematikauinmalang8003" aria-label="youtube">
              <svg
                className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8 8.001c-.207-1.49-.954-2.66-2.008-3.002C18.42 4.497 12 4.497 12 4.497s-6.42 0-7.793.502C3.153 5.341 2.406 6.51 2.199 8.001 2 9.505 2 12 2 12s0 2.495.199 3.999c.207 1.491.954 2.661 2.008 3.002 1.373.502 7.793.502 7.793.502s6.42 0 7.793-.502c1.054-.341 1.801-1.511 2.008-3.002.199-1.504.199-3.999.199-3.999s0-2.495-.199-3.999zM10.001 15.2V8.8l6 3.2-6 3.2z"
                  fill=""
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://id.linkedin.com/in/hmps-integral-matematika-a65417226" aria-label="linkedin">
              <svg
                className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.98 3.5C4.98 2.67 5.66 2 6.5 2s1.52.67 1.52 1.5S7.34 5 6.5 5 4.98 4.33 4.98 3.5zM4.98 8.75h3V20h-3V8.75zM11.25 8.75h2.86v1.55h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.61v6.65h-3v-5.92c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.55-2.28 3.12v6.03h-3v-9.25z"
                  fill=""
                />
              </svg>
            </a>
          </li>

              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
