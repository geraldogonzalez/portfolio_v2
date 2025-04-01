import Link from 'next/link'

export const HomeHeroGithubLink = () => {
  return (

    <code>
      <span className="text-sm md:text-base">{"// find my profile on Github:"}</span>
      <div>
        <span className="code-fnc">const </span>
        
        <div className="code-var inline">
          <span>githubLink</span>

          <span className="text-(--white-text)"> = </span>

          <Link
            href="https://github.com/geraldogonzalez"
            target="_blank"
            className="opct-transition"
          >
            <span className="text-(--white-text) md:hidden">socials</span>
            <span className="hidden code-str md:inline-block">{`"https://github.com/geraldogonzalez"`}</span>
            <span className="md:hidden">
              {`[`}
              <span className="text-teal-200">2</span>
              {`]`}
            </span>
          </Link>
        </div>
      </div>
    </code>
  )
}
