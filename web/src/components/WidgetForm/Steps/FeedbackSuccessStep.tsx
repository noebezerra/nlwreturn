import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequest }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 34a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28Z" fill="#77B255"/><path d="M31.78 8.362a2.502 2.502 0 0 0-3.458.736L17.436 25.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458Z" fill="#fff"/></svg>
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        
        <button type="button" onClick={onFeedbackRestartRequest} className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
          Quero enviar outro feedback
        </button>
      </div>
    </>
  )
}