type ScrollHandler = (event: Event) => void;
type RemoveScrollHandler = ((handler: ScrollHandler) => void) | null;

export function useEventScroll(
  handleScroll: ScrollHandler,
  onRemoveScroll: RemoveScrollHandler = null
) {
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  if (onRemoveScroll) {
    onRemoveScroll(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }
}
