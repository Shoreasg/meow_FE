'use client';
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const faqs = [
  {
    question: "What is the contract address?",
    answer:
      "0x7F70a752E87372f4270F123bba8d86E432C7fC1D",
  },
  {
    question: "Where can I get for $MEOW?",
    answer:
      `You can get it on Plunderswap! Here is the `,
    link: "https://plunderswap.com/swap?outputCurrency=0x7F70a752E87372f4270F123bba8d86E432C7fC1D"
  },
  {
    question: "Any Roadmap?",
    answer:
      "No there is no roadmap for this token. Invest at your own risk!",
  },
  {
    question: "What is the total supply",
    answer:
      "Total supply is 6,969,696,969 $MEOW. Started off with 500 $ZIL LP. Look where we are today!"
  },
  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-orange-400" id='faq'>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-orange-700">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-orange-700">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-orange-600">
                        {faq.answer}
                        {faq.link && (
                          <Link href={faq.link} className='underline' target='_blank'>
                            link
                          </Link>
                        )}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
