document
  .querySelector('paint-app')
  ?.addEventListener(
    'titlechange' as never,
    (evt: CustomEvent<{ title: string }>) =>
      (document.title = `${evt.detail.title} - Paint`),
  );
