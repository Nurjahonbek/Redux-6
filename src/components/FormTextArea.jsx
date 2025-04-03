import React from 'react'

function FormTextArea({label}) {
  return (
    <fieldset className="fieldset">
  <legend className="fieldset-legend">{label}</legend>
  <textarea className="textarea h-24 w-full" placeholder="Type Here"></textarea>
</fieldset>
  )
}

export default FormTextArea
