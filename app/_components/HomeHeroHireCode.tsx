export const HomeHeroHireCode = () => {

  return (
    <code className="hidden lg:block p-4 bg-[#020618] rounded-2xl text-xs 2xl:text-base 2xl:rounded-[20px] 2xl:py-6 2xl:px-10 leading-5 2xl:leading-6 code-shadow">
      <div className="mb-4">
        <span className="code-fnc">function </span>

        <p className="code-hire inline">hire
          <span className="code-bracket">{'('}</span>
          <span className="code-brace">{'{ '}</span>
        </p>

        <p className="inline code-var">deadline 
          <span className="text-(--white-text)"> = </span>
          <span className="code-str">"ASAP"</span>
          <span className="text-(--white-text)">, </span>
          coffee
          <span className="code-brace">{' }'}</span>
          <span className="code-bracket">{') '}</span>
          <span className="code-bracket">{'{'}</span>
        </p>
      </div>
      
      <div className="indent-4 mb-4 code-statement">
        if
        <span className="code-brace">{"("}</span>
        <span className="text-(--white-text)">!</span>
        <span className="code-var">coffee</span>
        <span className="code-brace">{") "}</span>
        return
        <span className="code-str"> "No, thanks. Good luck!🥱"</span>
        <span className="text-(--white-text)">;</span>
      </div>
      
      <div className="indent-4 mb-4 code-statement">
        return
        <span className="code-str">{" `Let's finish this "}</span>
        <span className="code-fnc">{"${ "}</span>
        <span className="code-var">deadline</span>
        <span className="code-fnc">{" }"}</span>
        
        <span className="code-str">!☕🚀`</span>
        <span className="text-(--white-text)">;</span>
      </div>

      <span className="code-bracket block mb-4">{'}'}</span>

      <span className="code-comment block">// Should be a good coffee</span>
      <div className="code-hire">hire
        <span className="code-bracket">{'('}</span>
        <span className="code-brace">{'{ '}</span>
        <p className="code-var inline">coffee
          <span className="text-(--white-text)">: </span>
          <span className="code-fnc">"espresso"</span>
          <span className="code-brace">{' }'}</span>
          <span className="code-bracket">{')'}</span>
          <span className="text-(--white-text)">;</span>
        </p>
      </div>
    </code>
  )
}
