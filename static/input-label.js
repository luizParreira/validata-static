const pinLabelColors = (inputWrapper, value) => {
  const input = inputWrapper.querySelector("input")
  const label = inputWrapper.querySelector("label")
  value = value || (input && input.value)

  if (
    inputWrapper.classList.contains("a-input--invalid") &&
    value &&
    !label.classList.contains("a-input--invalid")
  ) {
    label.classList.add("a-label--invalid")
  }

  if (label && label.classList.contains("a-label--invalid") && !value) {
    label.classList.remove("a-label--invalid")
  }
}

export const initFloatingLabel = (context, document) => {
  context.requestAnimationFrame(() => {
    const inputs = document.querySelectorAll(".a-input")

    const verifyValue = (input, label) => {
      if (!label) return

      if (input.value || input.placeholder) {
        label.classList.add("a-input--floating-label")
      } else {
        label.classList.remove("a-input--floating-label")
      }
    }

    inputs.forEach(input => {
      const currentInput = input.firstChild
      const currentLabel = input.querySelector("label")

      verifyValue(currentInput, currentLabel)

      currentInput.addEventListener("focus", () => {
        verifyValue(currentInput, currentLabel)
      })

      currentInput.addEventListener("focusout", () => {
        verifyValue(currentInput, currentLabel)
      })

      currentInput.addEventListener("change", () => {
        verifyValue(currentInput, currentLabel)
      })

      currentInput.addEventListener("input", event => {
        pinLabelColors(input, event.target.value)
      })

      pinLabelColors(input)
    })
  })
}

const HandleInputEvents = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    initFloatingLabel(window, document)
  }
  return null
}

export default HandleInputEvents
