function save_options() {

    var stackId = document.getElementById('stackId').value
    var contType = document.getElementById('contType').value
    var localId = document.getElementById('localId').value
    var btnColor = document.getElementById('btnColor').value
    var btnPos = document.getElementById('btnPos')[document.getElementById('btnPos').selectedIndex].value
    var domains = document.getElementById('domains').value
    var watch = document.getElementById('watchUrl').value
    var delay = document.getElementById('watchDelay').value


    chrome.storage.sync.set({
      stack : stackId,
      local: localId,
      type: contType,
      btn: btnColor,
      btnPos: btnPos,
      dom: domains,
      watch: watch,
      delay: delay
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            window.close()
        }, 750);
    });
  }
  
  function restore_options() {
    chrome.storage.sync.get({
        stack : '',
        local: '',
        type: '',
        dom: '',
        btn: '#004687',
        btnPos: 'right',
        watch: '',
        delay: ''
    }, function(items) {
        document.getElementById('stackId').value = items.stack
        document.getElementById('contType').value = items.type
        document.getElementById('localId').value = items.local
        document.getElementById('btnColor').value = items.btn
        document.getElementById('btnPos').value = items.btnPos
        document.getElementById('domains').value = items.dom
        document.getElementById('watchUrl').value = items.watch
        document.getElementById('watchDelay').value = items.delay
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);