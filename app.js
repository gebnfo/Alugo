if ('serviceWorker' in navigator) {
    // Registre um service worker hospeado na raiz do
    // site usando um escopo mais restritivo.
    navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
      console.log('Service worker registrado com sucesso:', registration);
    }).catch(function(error) {
      console.log('Service worker falhou ao registrar:', error);
    });
  } else {
    console.log('Service workers não é suportado pelo navegador!.');
  }