
"Navigation:
"gg   - beginning of file
"G    - end of file
"^    - beginning of line
"$    - end of line
"
"ctrl+j/k = move line up/down
"shift+j/k = nav 5 lines at a time
"Folding:
"zz   - folding on
"zR   - open all folds
"zo   - open current fold
"zc   - close current fold
"
"Search/Replace:
"%s/\n\s*\(word\)/\1/gc - replace /nspaces word with just word

set nocompatible                " start with defaults


set backupdir=/tmp
set ss=1                        " Nice sidescroll
set siso=9                      " Even nicer sidescroll ;)
set nowrap                      " dont wrap lines
set sm                          " show matching paren
set ww=<,>,[,],h,l,b,s,~        " normal cursor movement
set guioptions-=T               " no toolbar 
set background=dark
set novisualbell
set vb t_vb=                    " don't do anything when I screw up!

hi normal   ctermfg=white  ctermbg=black guifg=white  guibg=black
hi nontext  ctermfg=blue   ctermbg=black guifg=blue   guibg=black

filetype on                     " understand the file type
filetype plugin indent on
"set guifont=-rfx-courier-medium-r-*-*-12-*-*-*-*-*-*-5
set fileencodings=utf-8,iso-8859-5 "default to utf-8 encoding

set tabstop=4                   " 4 spaces for tabs
set softtabstop=4               " tab causes indent
set shiftwidth=4                " 4 spaces
set shiftround                  " round to the nearest shiftwidth
set expandtab                   " spaces instead of tabs

set cindent
set smartindent
set autoindent                  " set auto indenting to on
set smarttab

" for quick compiling
set makeprg=make
nmap <C-c> :make <CR>:cc!<CR>

"autocmd BufEnter * lcd %:p:h   " change to directory of current file automatically (put in _vimrc)

set tags=./tags
let Tlist_Ctags_Cmd='$HOME/ctags-5.7/ctags '
let Tlist_Process_File_Always = 1
let Tlist_Show_One_File = 1
let Tlist_Show_Menu = 1
let Tlist_Use_SingleClick = 1
let Tlist_Auto_Highlight_Tag = 1
let Tlist_Close_On_Select = 1
let Tlist_Auto_Update = 1
let Tlist_GainFocus_On_ToggleOpen = 1
let Tlist_Highlight_Tag_On_BufEnter = 1
let Tlist_Compact_Format = 1

" autocmd BufEnter * TlistUpdate   " update taglist
" autocmd BufEnter * call DoWordComplete()
noremap <LeftRelease> "+y<LeftRelease>

set backspace=indent,eol,start  "Make backspace delete lots of things"

set cinkeys=0{,0},:,0#,!<Tab>,<Return>,!^F

autocmd FileType python,c,cpp,h,hpp,slang set cindent expandtab
autocmd FileType make,css,eruby,html set noexpandtab shiftwidth=4
autocmd FileType plaintex set wrap!

syntax on

syntax enable                      " enable syntax highlighting
set previewheight=12               " set gdb console initial height
"run macros/gdb_mappings.vim        " source key mappings listed in this
                                        " document
"set asm=0                          " don't show any assembly stuff
"set gdbprg=/usr/local/bin/vxgdb    " set GDB program name (default 'gdb')

set history=50
set viminfo=/10,'10,r/mnt/zip,r/mnt/floppy,f0,h,\"100

set wildmenu
set wildmode=list:longest,full

set showmode
set showcmd

set hlsearch
set incsearch
set ignorecase
set smartcase


"Key Mappings
"nnoremap <C-N> :next<CR>
"nnoremap <C-P> :prev<CR>

"Switch Buffers with c-n and c-p
nnoremap <S-C-N> :bn!<CR>
nnoremap <S-C-P> :bp!<CR>

" (GUI) Live line reordering (very useful)
nnoremap <silent> <C-S-k> :move .-2<CR>|
nnoremap <silent> <C-S-j> :move .+1<CR>|
vnoremap <silent> <S-C-K> :move '<-2<CR>gv|
vnoremap <silent> <S-C-J> :move '>+1<CR>gv|
inoremap <silent> <C-S-k> <C-o>:move .-2<CR>|
inoremap <silent> <C-S-j> <C-o>:move .+1<CR>|

" Turbo navigation mode
" Modified to work with counts, see :help complex-repeat
nnoremap <silent> <S-j> @='10j'<CR>|xnoremap <silent> J @='10j'<CR>|
nnoremap <silent> <S-k> @='10k'<CR>|xnoremap <silent> K @='10k'<CR>|

" Map C-g to escape, b/c it's close and it's like emacs
nnoremap <silent> <C-g> <Esc>:nohlsearch<bar>pclose<CR>|
vnoremap <C-g> <Esc><Nul>| " <Nul> added to fix select mode problem
inoremap <C-g> <Esc>|
inoremap kj <Esc>|
cnoremap <C-g> <C-c>

" Macros (replay the macro recorded by qq)
nnoremap Q @q|

"comment entire file
nmap <F3> magg=G'a
nmap \p [p

"re-source this file
nmap ,s :source $HOME/.vimrc<CR>

"view this file
nmap ,v :e! $HOME/.vimrc<CR>
nmap ,b :e! $HOME/.bashrc<CR>
nmap <S-C-t> :tabnew<CR>:bn<CR>
nmap <S-C-q> :tabclose<CR>
nmap + :cn<CR>

"use shift j/k to nav in vis mode
nmap <s-down> j
nmap <s-up> k
vmap <s-down> j
vmap <s-up> k

"I didn't like the way vimshell worked, it geeked out on occasion
nmap <c-S>s :new \| vimshell bash<CR>

nmap <silent> <C-e> :TlistToggle<CR>
"nmap <C-l> :ls<CR>:b
map <C-l> \be
"shift to select
map <C-f> :Vexplore<CR>

imap <S-Down> <C-O>v
imap <S-Up> <C-O>v
imap <S-Right> <C-O>v
imap <S-Left> <C-O>v

map <F8>  <C-E>:sleep 500m<CR><C-E>:redraw<CR><F8>

nmap zz :set foldmethod=indent<CR>

set wildignore=*.o,*.obj,*.bak,*.exe


" gdb - stop & restart program from beginning
nmap <F5>  <C-Z>:sleep<CR>R:sleep<CR><F21>y

" info threads
"nmap <silent> <S-T> <F21>t

" bt
"nmap <silent> <S-S> <F21>s

set errorformat=%f:%l:\%m "GCC's error format
"set errorformat=%f:%l:\ %m,In\ file\ included\ from\ %f:%l:,\^I\^Ifrom\ %f:%l%m 
"advanced gcc

"fix delete?
if &term =~ 'xterm'
  if $COLORTERM == 'gnome-terminal'
    execute 'set t_kb=' . nr2char(8)
    fixdel
    set t_RV=
  elseif $COLORTERM == ''
    execute 'set t_kb=' . nr2char(8)
    fixdel
    endif
endif


hi WhitespaceEOL ctermfg=red guifg=red
match WhitespaceEOL /\s\+$/

hi BeginTabs ctermfg=blue guifg=blue
match BeginTabs /^[\t ]*\t/

"show tabs, trailing whitespace, lines going off end of term
"if (!has("windows"))
if (&termencoding == "utf-8") || has("gui_running")
   if v:version >= 700
      set list listchars=tab:Â»Â·,trail:Â·,extends:â¦,nbsp:_
   else
      set list listchars=tab:Â»Â·,trail:Â·,extends:<e2><80><a6>
   endif
else
   if v:version >= 700
      set list listchars=tab:>-,trail:.,extends:>,nbsp:_
   else
      set list listchars=tab:>-,trail:.,extends:>
 endif
endif
"endif


" Nice statusbar
set laststatus=2
set statusline=
set statusline+=%-3.3n\                      " buffer number
set statusline+=%f\                          " file name
"set statusline+=%h%m%r%w                     " flags
set statusline+=\(%{strlen(&ft)?&ft:'none'}) " filetype
"set statusline+=%{&encoding},                " encoding
"set statusline+=%{&fileformat}]              " file format
if filereadable(expand("$VIM/vimfiles/plugin/vimbuddy.vim"))
  set statusline+=\ %{VimBuddy()}          " vim buddy
endif
set statusline+=%=                           " right align
"set statusline+=0x%-8B\                      " current char
set statusline+=%-14.(%l,%c%V%)\ %<%P        " offset

set noerrorbells                             " forget the audible errors


if v:version >= 700
inoremap <silent><Esc>      <C-r>=pumvisible()?"\<lt>C-e>":"\<lt>Esc>"<CR>
inoremap <silent><CR>       <C-r>=pumvisible()?"\<lt>C-y>":"\<lt>CR>"<CR>
inoremap <silent><Down>     <C-r>=pumvisible()?"\<lt>C-n>":"\<lt>Down>"<CR>
inoremap <silent><Up>       <C-r>=pumvisible()?"\<lt>C-p>":"\<lt>Up>"<CR>
inoremap <silent><PageDown> <C-r>=pumvisible()?"\<lt>PageDown>\<lt>C-p>\<lt>C-n>":"\<lt>PageDown>"<CR>
inoremap <silent><PageUp>   <C-r>=pumvisible()?"\<lt>PageUp>\<lt>C-p>\<lt>C-n>":"\<lt>PageUp>"<CR> 
endif


" Paragraph-ify the file
nmap L ggVGgq

" Use embedded python to add on a scientific calculater
" :command! -nargs=+ Calc :py print <args>
" :py from math import *

nmap <silent> F :QFix<CR>
vmap <silent> gcc :TCommentRight<CR>

" remove trailing whitespace in python files
autocmd BufWritePre *.py :call RemoveTrailingWhitespace()
fun! RemoveTrailingWhitespace()
    let oldLine=line('.')
    execute ':%s/\s\+$//e'
    execute ':' . oldLine
endfun

" indent with < and >, works on regions too
nnoremap < <<
nnoremap > >>
vnoremap < <ESC>'<V'><gv
vnoremap > <ESC>'<V'>>gv

colorscheme cg3

" cscope settings
:source ~/.vim/plugin/cscope_maps.vim
:cs add ~/src/fos/fos

"nnoremap <C-SPACE><C-SPACE><C-SPACE> :cs find s <C-R>=expand("<cword>")<CR><CR>
nnoremap <C-SPACE><C-n> :tnext<CR>

"notes on setting up cscope...
"run this function to find all of the files
">find /home/charles/src/locution/linux_port -name '*.c' -o -name '*.cpp' -o -name '*.h' -o -name '*.hpp' > cscope.files
"then run cscope on that function
">cscope -b
"then add this 
":cs add ~/src/locution/cscope.out
"
"
" Make shift-insert work like in Xterm
map <S-Insert> <MiddleMouse>
map! <S-Insert> <MiddleMouse>


:let Grep_Default_Options = '-I'
:let Rgrep_Default_Options = '-I'
:let Grep_Default_Filelist = '*.[chS]'

" hex mode
"nnoremap <C-H> :Hexmode<CR>
"inoremap <C-H> <Esc>:Hexmode<CR>
"vnoremap <C-H> :<C-U>Hexmode<CR>

"let mapleader=","
"map <Leader>hon :%!xxd<CR>
"map <Leader>hof :%!xxd -r<CR>


