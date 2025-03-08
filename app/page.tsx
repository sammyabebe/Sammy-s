'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true); // Ensures component is only rendered on the client
    setTimeout(() => setLoading(false), 3000); // Simulate loading delay
  }, []);

  if (!isClient) return null; // Prevent SSR rendering

  return (
    <>
  <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1, transition: { duration: 1.5 } }}
              exit={{ scale: 0.5, opacity: 0, transition: { duration: 1.5 } }}
            >
              <motion.h1
                className="text-6xl font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" } }}
                >
                  S
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "mirror" } }}
                >
                  a
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "mirror" } }}
                >
                  m
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 0.6, repeat: Infinity, repeatType: "mirror" } }}
                >
                  m
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 0.8, repeat: Infinity, repeatType: "mirror" } }}
                >
                  y
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 1, repeat: Infinity, repeatType: "mirror" } }}
                >
                  &apos;
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1], transition: { duration: 1.5, delay: 1.2, repeat: Infinity, repeatType: "mirror" } }}
                >
                  s
                </motion.span>
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <a href={socialLinks.twitter} target="https://x.com/SamuielZ">
          <motion.div
            // initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
            // animate={{ scale: 1, rotate: 0, opacity: 1, transition: { duration: 1 } }}
            // whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Image
              src="/photo.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </motion.div>
        </a>
        <motion.h1
          className="mb-8 text-3xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Sammy&apos;s
        </motion.h1>
        <motion.div
          className="prose prose-neutral dark:prose-invert"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 7 } }}
          >
            Hi! I&apos;m Samuel, a highly skilled full-stack web developer specializing in React and Next.js. I build high-performance, scalable, and user-centric web applications that deliver seamless user experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 7 } }}
          >
            With a strong foundation in modern web technologies and database management, I craft efficient, maintainable, and future-proof solutions. Passionate about clean code and best practices, I continuously explore new advancements to create innovative digital experiences that drive results.
            <a target="_blank" href="github.com/sammyabebe"> more</a>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 7 } }}
          >
            Built and maintained by <a href="#" target="_blank">Sammy</a>.
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
}