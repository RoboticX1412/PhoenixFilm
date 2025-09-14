document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn reload trang

  const searchType = document.getElementById("search-type").value;
  const query = document.getElementById("search-input").value.trim();

  if (!query) return;

  // Gửi request tới backend (API)
  fetch(`/api/search?type=${searchType}&q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      console.log("Kết quả tìm kiếm:", data);
      // TODO: hiển thị kết quả ra giao diện
    })
    .catch(err => console.error("Lỗi tìm kiếm:", err));
});

