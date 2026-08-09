export function About() {
  return (
    <section className="mt-8">
      <h2 className="font-semibold text-2xl tracking-tighter mb-0">About</h2>
      <div className="prose prose-neutral dark:prose-invert mt-0">
        <p>
          I like working on problems where the abstraction eventually breaks
          and you have to figure out what&rsquo;s actually happening underneath.
        </p>
        <p>
          I&rsquo;ve spent the last few years working on realtime systems and
          products, from building WebRTC applications and customer integrations
          at Daily to working on the SFU and SCTP stack at Cloudflare. Along
          the way I&rsquo;ve also built full-stack web and mobile products,
          developer tooling, and a browser-based livestreaming studio.
        </p>
        <p>
          I&rsquo;m particularly interested in realtime infrastructure,
          networking, distributed systems, and performance. I like
          understanding why something is slow or unreliable, digging through
          the layers underneath it, and seeing how far I can push it.
        </p>
        <p>
          Outside of work, I&rsquo;ve been involved in open source for quite a
          while, starting with amFOSS and later contributing to projects around
          GraphQL and Wikimedia.
        </p>
        <p>
          Currently pursuing an MS in Computer Science at Stony Brook
          University.
        </p>
      </div>
    </section>
  );
}
