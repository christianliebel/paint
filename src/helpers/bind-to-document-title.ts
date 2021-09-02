document
  .querySelector('paint-app')
  ?.addEventListener(
    'titlechange' as any,
    (evt: CustomEvent<{ title: string }>) =>
      (document.title = `${evt.detail.title} - Paint`),
  );
