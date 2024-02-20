import { Disclosure } from "@headlessui/react";
import { getTruthyCount } from "../../utility/helpers";
import ResultQuestion from "./ResultQuestion";

export default function ResultQuiz({ quiz }) {
  return (
    <div className="w-full p-6 bg-neutral-50 border border-gray-200 rounded-lg mb-4">
      <div className="flex items-ceter justify-between gap-4 mb-6">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {quiz.categoryName}
        </h2>

        <span>
          {`Result ${getTruthyCount(quiz.answers, "isCorrect")} / ${
            quiz.answers.length
          }`}
        </span>
      </div>

      <Disclosure>
        <Disclosure.Button className="flex justify-between rounded-lg bg-neutral-100 hover:bg-emerald-light hover:border-emerald-light hover:text-primary-dark border-emerald text-slate-900 font-semibold px-4 py-2">
          Show my answers
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4">
          {quiz.answers.map((question) => (
            <ResultQuestion question={question} key={quiz.id + question.question} />
          ))}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
