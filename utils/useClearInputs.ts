export function useClearInputs(inputs: Ref<any>) {
  for (const key in inputs.value) {
    if (inputs.value.hasOwnProperty(key)) {
      inputs.value[key] = '';
    }
  }
}
