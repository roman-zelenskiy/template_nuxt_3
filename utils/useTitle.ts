export function useTitle(title: any) {
    const { $i18n } = useNuxtApp();
    const { t } = $i18n;
  
    const reactiveTitle = computed(() => (typeof title !== 'string' ? title.value : t(`${title}`)));
  
    useHead({
      titleTemplate: reactiveTitle.value,
    });
    watchDeep(reactiveTitle, () => {
      useHead({
        titleTemplate: reactiveTitle.value,
      });
    });
  }  