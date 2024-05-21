import { FormEvent, } from "react"
import { motion, } from "framer-motion"
import useMultipageForm from "../hooks/useMultipageForm"
import PageWrapper from "./PageWrapper"
import ProgressBar from "./ProgressBar"
import NavigationButtons from "./NavigationButtons"
import {
  FADE_ANIMATION,
  FADE_TRANSITION,
  PAGES,
  VALIDATION_RULES,
} from "../constants"
import useValidateFormValues from "../hooks/useValidateFormValues"
import useFormStateContext from "../hooks/useFormStateContext"
import useSubmitForm from "../hooks/useSubmitForm"

export default function Form() {
  const context = useFormStateContext()
  const { formState, } = context

  const {
    currentComponent,
    currentTitle,
    next,
    prev,
    isFirstPage,
    isOverviewPage,
    isSuccessPage,
  } = useMultipageForm(context, PAGES,)
  const { validateFormValues, } = useValidateFormValues(
    context,
    VALIDATION_RULES,
  )
  const submitForm = useSubmitForm(context,)

  const handleOnSubmit = async (event: FormEvent,) => {
    event.preventDefault()

    const isInputValid = validateFormValues()

    if (!isInputValid) return
    if (!isOverviewPage) return next()

    await submitForm()
    next()
  }

  return (
    <div className="w-11/12 md:w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-5">
      <ProgressBar />
      <motion.form
        key={formState.currentPageIndex}
        variants={FADE_ANIMATION}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={FADE_TRANSITION}
        onSubmit={handleOnSubmit}
        className="w-full flex flex-col items-center gap-10"
      >
        <PageWrapper title={currentTitle}>{currentComponent}</PageWrapper>
        {formState.isLoading && (
          <div className="flex gap-2 items-center">
            <div className="text-gray-600 border-4 border-solid border-current border-r-transparent rounded-full align-[-0.125em] animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] h-6 w-6" />
            <span className="text-xl md:text-2xl text-gray-600">Speichern</span>
          </div>
        )}
        <NavigationButtons
          isFirstPage={isFirstPage}
          isOverviewPage={isOverviewPage}
          isSuccessPage={isSuccessPage}
          prev={prev}
        />
      </motion.form>
    </div>
  )
}
