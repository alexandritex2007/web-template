## Pre install
- Node.js
- tinypngApiKey

## Setup

### Create a directory
```
$ mkdir hoge
```
### Move to directory
```
$ cd hoge
```
### Clone folders
```
$ git clone https://github.com/alexandritex2007/web-template.git
```
### Move to directory
```
$ cd web-template
```
### Installing packages
```
$ npm install
```
### gulp global Installing ※Not needed if done
```
$ gulp -i gulp -g
```
### Enter API key
Enter a value in gulpconfig.json
## Start-up
```
$ gulp all
```
```
$ gulp
```

## File structure

```
.
├── LICENSE
├── README.md
├── dist
│   ├── apple-touch-icon.png
│   └── favicon.ico
├── gulpconfig.json
├── gulpfile.babel.js
├── package.json
├── src
│   ├── ect
│   │   ├── _base.ect
│   │   ├── common
│   │   │   ├── _footer.ect
│   │   │   ├── _head.ect
│   │   │   └── _header.ect
│   │   ├── index.ect
│   │   ├── menu1.ect
│   │   ├── menu2.ect
│   │   ├── menu3.ect
│   │   └── menu4.ect
│   ├── img
│   │   ├── assets
│   │   │   ├── assets_img_pc.png
│   │   │   ├── assets_img_sp.png
│   │   │   ├── sprite.png
│   │   │   └── sprite_sp.png
│   │   └── content
│   │       ├── content_img_pc.png
│   │       └── content_img_sp.png
│   ├── include
│   │   └── _const.js
│   ├── js
│   │   ├── common.js
│   │   ├── index.js
│   │   └── modules
│   │       ├── checkDevice.js
│   │       ├── ellipsis.js
│   │       ├── gotop.js
│   │       ├── imgswitch.js
│   │       └── scrollEvent.js
│   ├── sass
│   │   ├── base
│   │   │   ├── _a_reset.scss
│   │   │   ├── _basic.scss
│   │   │   └── _util.scss
│   │   ├── bootstrap
│   │   │   ├── _alert.scss
│   │   │   ├── _badge.scss
│   │   │   ├── _breadcrumb.scss
│   │   │   ├── _button-group.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _card.scss
│   │   │   ├── _carousel.scss
│   │   │   ├── _close.scss
│   │   │   ├── _code.scss
│   │   │   ├── _custom-forms.scss
│   │   │   ├── _dropdown.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _images.scss
│   │   │   ├── _input-group.scss
│   │   │   ├── _jumbotron.scss
│   │   │   ├── _list-group.scss
│   │   │   ├── _media.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _modal.scss
│   │   │   ├── _nav.scss
│   │   │   ├── _navbar.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _popover.scss
│   │   │   ├── _print.scss
│   │   │   ├── _progress.scss
│   │   │   ├── _reboot.scss
│   │   │   ├── _root.scss
│   │   │   ├── _tables.scss
│   │   │   ├── _tooltip.scss
│   │   │   ├── _transitions.scss
│   │   │   ├── _type.scss
│   │   │   ├── _utilities.scss
│   │   │   ├── _variables.scss
│   │   │   ├── bootstrap-grid.scss
│   │   │   ├── bootstrap-reboot.scss
│   │   │   ├── bootstrap.scss
│   │   │   ├── mixins
│   │   │   │   ├── _alert.scss
│   │   │   │   ├── _background-variant.scss
│   │   │   │   ├── _badge.scss
│   │   │   │   ├── _border-radius.scss
│   │   │   │   ├── _box-shadow.scss
│   │   │   │   ├── _breakpoints.scss
│   │   │   │   ├── _buttons.scss
│   │   │   │   ├── _caret.scss
│   │   │   │   ├── _clearfix.scss
│   │   │   │   ├── _float.scss
│   │   │   │   ├── _forms.scss
│   │   │   │   ├── _gradients.scss
│   │   │   │   ├── _grid-framework.scss
│   │   │   │   ├── _grid.scss
│   │   │   │   ├── _hover.scss
│   │   │   │   ├── _image.scss
│   │   │   │   ├── _list-group.scss
│   │   │   │   ├── _lists.scss
│   │   │   │   ├── _nav-divider.scss
│   │   │   │   ├── _pagination.scss
│   │   │   │   ├── _reset-text.scss
│   │   │   │   ├── _resize.scss
│   │   │   │   ├── _screen-reader.scss
│   │   │   │   ├── _size.scss
│   │   │   │   ├── _table-row.scss
│   │   │   │   ├── _text-emphasis.scss
│   │   │   │   ├── _text-hide.scss
│   │   │   │   ├── _text-truncate.scss
│   │   │   │   ├── _transition.scss
│   │   │   │   └── _visibility.scss
│   │   │   └── utilities
│   │   │       ├── _align.scss
│   │   │       ├── _background.scss
│   │   │       ├── _borders.scss
│   │   │       ├── _clearfix.scss
│   │   │       ├── _display.scss
│   │   │       ├── _embed.scss
│   │   │       ├── _flex.scss
│   │   │       ├── _float.scss
│   │   │       ├── _position.scss
│   │   │       ├── _screenreaders.scss
│   │   │       ├── _shadows.scss
│   │   │       ├── _sizing.scss
│   │   │       ├── _spacing.scss
│   │   │       ├── _text.scss
│   │   │       └── _visibility.scss
│   │   ├── common.scss
│   │   ├── core
│   │   │   ├── _extend.scss
│   │   │   ├── _mixin.scss
│   │   │   ├── _rule.scss
│   │   │   ├── _sprite.scss
│   │   │   ├── _sprite_mixin.scss
│   │   │   └── _sprite_sp.scss
│   │   ├── guide
│   │   │   ├── _01_text.scss
│   │   │   ├── _02_img.scss
│   │   │   ├── _03_btn.scss
│   │   │   ├── _04_list.scss
│   │   │   ├── _05_table.scss
│   │   │   ├── _06_media.scss
│   │   │   ├── _07_movie.scss
│   │   │   ├── _08_color.scss
│   │   │   └── _09_sprite_svg.scss
│   │   ├── layout
│   │   │   ├── _content.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _side.scss
│   │   ├── module
│   │   │   ├── _button.scss
│   │   │   ├── _color.scss
│   │   │   ├── _img.scss
│   │   │   ├── _list.scss
│   │   │   ├── _media.scss
│   │   │   ├── _movie.scss
│   │   │   ├── _sprite_svg.scss
│   │   │   ├── _table.scss
│   │   │   └── _text.scss
│   │   ├── module.scss
│   │   └── style
│   │       ├── _contents.scss
│   │       └── _single.scss
│   ├── sprite
│   │   ├── sprite01.png
│   │   ├── sprite100.png
│   │   └── sprite101.png
│   ├── sprite_sp
│   │   └── sprite_sp01.png
│   └── svg
│       └── svg01.svg
└── webpack.config.js
```