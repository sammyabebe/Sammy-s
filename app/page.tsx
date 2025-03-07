import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="https://x.com/SamuielZ">
        <Image
          src="/photo.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Sammy's
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Hi! I'm Samuel, a highly skilled full-stack web developer specializing in React and Next.js. 
        I build high-performance, scalable, and user-centric web applications that deliver seamless user experiences. 
        </p>
        <p>
        With a strong foundation in modern web technologies and database management, I craft efficient, maintainable, and future-proof solutions. Passionate about clean code and best practices, I continuously explore new advancements to create innovative digital experiences that drive results.{""}
          <a
            target="_blank"
            href="github.com/sammyabebe"
          >
            more
          </a>
          .
        </p>
        {/* <p>
          Sammy Portfolio  is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p> */}
        <p>
          Built and maintained by{" "}
          <a href="#" target="_blank">
            Sammy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
