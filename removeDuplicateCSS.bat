call node-sass static/scss -o static/css
call postcss static/css/styles.css > static/css/styles2.css
call del static\css\styles.css
call ren static\css\styles2.css styles.css