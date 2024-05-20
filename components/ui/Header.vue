<script setup lang="ts">
  type Props = {
    fixedHeader?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    fixedHeader: true,
  });

  const header = ref();
  const isFixedHeader = ref(false);
  const headerHeight = computed(() => header.value.offsetHeight);
  const isMobileMenu = ref(false);

  const switchMobileMenu = (value: boolean) => {
    isMobileMenu.value = value;
  };

  useEventScroll(() => {
    if (!props.fixedHeader) {
      return false;
    }
    if (!isFixedHeader.value) {
      switchMobileMenu(false);
    }
    if (window.scrollY > header.value.offsetHeight) {
      isFixedHeader.value = true;
    } else {
      isFixedHeader.value = false;
    }
  });
</script>

<template>
  <div :style="{ height: isFixedHeader ? headerHeight + 'px' : 'auto' }">
    <header
      ref="header"
      :class="
        cn('py-[20px] md:py-[35px] xl:py-[41px]', {
          'fixed left-0 top-0 !z-[100] w-full  animate-fade-down bg-white animate-duration-700 lg:!p-0':
            isFixedHeader,
        })
      "
    >
      <slot
        :isFixedHeader="isFixedHeader"
        :isMobileMenu="isMobileMenu"
        :switchMobileMenu="switchMobileMenu"
      />
    </header>
  </div>
</template>

<style scoped></style>
