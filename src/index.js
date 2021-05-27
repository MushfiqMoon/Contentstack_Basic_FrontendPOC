import "./styles.css";

$.ajax({
  type: "GET",
  url:
    "https://cdn.contentstack.io/v3/content_types/news/entries/blt62774f6bbf7bc8ce?environment=development&locale=en-us",
  headers: {
    "Content-Type": "application/json",
    api_key: "blt1ffa4652a21e7445",
    access_token: "csad11ce20c37de5a790f62164"
  },
  dataType: "json",
  success: processData,
  error: function () {
    alert("failed");
  }
});

function processData(data) {
  $("#title").append(data.entry.title);
  $("#description").append(data.entry.rich_text_editor);
  $("#image").attr("src", data.entry.group.file.url);
  $("#name").append(data.entry.group.single_line);
  $("#address").append(data.entry.group.address);
  $("#skill").append(data.entry.group.skill);
  $("#rate").append(data.entry.group.rating);
}
