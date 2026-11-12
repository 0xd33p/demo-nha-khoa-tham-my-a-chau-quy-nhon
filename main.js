(function () {
  // PlacesSearch: mở 24 giờ mọi ngày. Trạng thái tính theo Asia/Ho_Chi_Minh, không theo múi giờ trình duyệt.
  var parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
    weekday: 'short'
  }).formatToParts(new Date());
  var map = {};
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].type !== 'literal') map[parts[i].type] = parts[i].value;
  }
  var wd = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  var d = wd[map.weekday];
  if (typeof d !== 'number') d = new Date().getDay();
  var open = true; // 24 giờ theo PlacesSearch
  var o = document.getElementById('open-now');
  var s = document.getElementById('open-sub');
  if (o) {
    o.textContent = open ? 'Đang mở cửa' : 'Đã đóng cửa';
    o.style.color = open ? '#4cd07d' : '#e0624f';
    if (s) s.textContent = 'Mở 24 giờ (PlacesSearch)';
  }
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
})();
