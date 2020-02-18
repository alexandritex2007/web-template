export function ellipsis() {
  $('.text_overflow').each(function() {
    const $target = $(this),
    $clone = $target.clone();
    let html = $target.html();

    $clone.css({
      display: 'none',
      position : 'absolute',
      overflow : 'visible'
    }).width($target.width()).height('auto');
    $target.after($clone);
    while ((html.length > 0) && ($clone.height() > $target.height())) {
      html = html.substr(0, html.length - 1);
      $clone.html(html + '...');
    }
    $target.html($clone.html());
    $clone.remove();
  });
}