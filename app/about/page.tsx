/* eslint-disable react/no-unescaped-entities */
import React from "react";

function AboutPage() {
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  A brief introduction
                </p>
              </div>
              <div className="max-w-[700px] space-y-4 text-muted-foreground md:text-xl">
                <p>
                  Hello! My name is Nwogu Maryjane Amarachi and I'm a passionate
                  web developer with a keen eye for design. I've been creating
                  beautiful and functional websites for the past 2 years, and
                  I'm always excited to take on new challenges.
                </p>
                <p>
                  In my free time, you can find me exploring the great outdoors,
                  reading the latest tech blogs, or tinkering with new
                  technologies. I'm a lifelong learner and I'm constantly
                  striving to improve my skills and knowledge.
                </p>
                <p>
                  I'm excited to connect with you and learn more about your
                  project. Let's work together to create something truly
                  amazing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
