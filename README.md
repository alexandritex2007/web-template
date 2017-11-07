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
## Start-up
```
$ gulp
```

## File structure

```
.
├── LICENSE
├── README.md
├── assets
│   └── js
│       └── min
├── dist
│   ├── _base.html
│   ├── apple-touch-icon.png
│   ├── assets
│   │   ├── images
│   │   │   ├── assets_img_pc.png
│   │   │   ├── assets_img_sp.png
│   │   │   ├── sprite.png
│   │   │   └── sprite_sp.png
│   │   └── svg
│   │       └── svg.svg
│   ├── common
│   │   ├── _footer.ect
│   │   ├── _gnav.ect
│   │   ├── _head.ect
│   │   ├── _header.ect
│   │   └── _script.ect
│   ├── content
│   │   └── images
│   │       ├── assets_img_pc.png
│   │       ├── assets_img_sp.png
│   │       ├── content_img_pc.png
│   │       └── content_img_sp.png
│   ├── favicon.ico
│   ├── index.html
│   ├── menu1.html
│   ├── menu2.html
│   ├── menu3.html
│   ├── menu4.html
│   └── site
│       ├── css
│       │   ├── bootstrap
│       │   │   └── bootstrap.css
│       │   ├── common.css
│       │   └── module.css
│       ├── js
│       │   ├── bundle.js
│       │   └── common.js
│       └── maps
│           ├── bootstrap
│           │   ├── bootstrap-grid.css.map
│           │   ├── bootstrap-reboot.css.map
│           │   ├── bootstrap.css.map
│           │   └── module.css.map
│           ├── common.css.map
│           ├── module.css.map
│           ├── pc.css.map
│           └── sp.css.map
├── guide
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── fonts
│   │   │   ├── FontAwesome.otf
│   │   │   ├── fontawesome-webfont.eot
│   │   │   ├── fontawesome-webfont.svg
│   │   │   ├── fontawesome-webfont.ttf
│   │   │   └── fontawesome-webfont.woff
│   │   ├── images
│   │   │   ├── assets_img_pc.png
│   │   │   ├── assets_img_sp.png
│   │   │   ├── content_img_pc.png
│   │   │   ├── content_img_sp.png
│   │   │   ├── favicon.ico
│   │   │   ├── frontnote.png
│   │   │   ├── sprite.png
│   │   │   └── sprite_sp.png
│   │   ├── js
│   │   │   ├── main.js
│   │   │   └── ripple-effect.js
│   │   └── lib
│   │       ├── highlight.pack.js
│   │       ├── jquery.js
│   │       └── jquery.mousewheel.js
│   ├── index.html
│   ├── site
│   │   ├── css
│   │   │   ├── bootstrap
│   │   │   │   ├── bootstrap-grid.css
│   │   │   │   ├── bootstrap-reboot.css
│   │   │   │   ├── bootstrap.css
│   │   │   │   └── module.css
│   │   │   ├── common.css
│   │   │   └── module.css
│   │   ├── js
│   │   │   └── min
│   │   │       └── common.js
│   │   └── maps
│   │       ├── bootstrap
│   │       │   ├── bootstrap-grid.css.map
│   │       │   ├── bootstrap-reboot.css.map
│   │       │   ├── bootstrap.css.map
│   │       │   └── module.css.map
│   │       ├── common.css.map
│   │       ├── module.css.map
│   │       └── sp.css.map
│   └── src-sass-_style_guide.html
├── gulpfile.js
├── package.json
├── site
│   └── js
│       └── common.js
├── src
│   ├── css
│   ├── ect
│   │   ├── _base.ect
│   │   ├── common
│   │   │   ├── _footer.ect
│   │   │   ├── _head.ect
│   │   │   ├── _header.ect
│   │   │   └── _script.ect
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
│   │   ├── assets
│   │   ├── main.js
│   │   └── site
│   │       └── common.js
│   ├── sass
│   │   ├── _sprite.scss
│   │   ├── _sprite_sp.scss
│   │   ├── _style_guide.scss
│   │   ├── base
│   │   │   ├── _a_reset.scss
│   │   │   ├── _basic.scss
│   │   │   └── _util.scss
│   │   ├── bootstrap
│   │   │   ├── _alert.scss
│   │   │   ├── _badge.scss
│   │   │   ├── _bootstrap-grid.scss
│   │   │   ├── _bootstrap-reboot.scss
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
│   │   │   ├── _tables.scss
│   │   │   ├── _tooltip.scss
│   │   │   ├── _transitions.scss
│   │   │   ├── _type.scss
│   │   │   ├── _utilities.scss
│   │   │   ├── _variables.scss
│   │   │   ├── bootstrap.scss
│   │   │   ├── mixins
│   │   │   │   ├── _alert.scss
│   │   │   │   ├── _background-variant.scss
│   │   │   │   ├── _badge.scss
│   │   │   │   ├── _border-radius.scss
│   │   │   │   ├── _box-shadow.scss
│   │   │   │   ├── _breakpoints.scss
│   │   │   │   ├── _buttons.scss
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
│   │   │   │   ├── _navbar-align.scss
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
│   │   ├── layout
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _side.scss
│   │   ├── module
│   │   │   ├── _button.scss
│   │   │   ├── _heading.scss
│   │   │   ├── _list.scss
│   │   │   ├── _media.scss
│   │   │   ├── _other.scss
│   │   │   ├── _sprite_svg.scss
│   │   │   └── _table.scss
│   │   ├── module.scss
│   │   └── style
│   │       └── _contents.scss
│   ├── sprite
│   │   └── sprite01.png
│   ├── sprite_sp
│   │   └── sprite_sp01.png
│   └── svg
│       └── svg01.svg
└── webpack.config.js
```