export function useTitle(title: any, isI18n: boolean = true) {
  const { $i18n } = useNuxtApp();
  const { t } = $i18n;

  const reactiveTitle = computed(() => (!isI18n ? title : t(`${title}`)));

  useHead({
    titleTemplate: reactiveTitle.value,
  });
  watchDeep(reactiveTitle, () => {
    useHead({
      titleTemplate: reactiveTitle.value,
    });
  });
}
