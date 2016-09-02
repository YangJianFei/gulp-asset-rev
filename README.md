# gulp-asset-rev
gulp auto to add version 

The gulp can run in node.js
## (1):
  1.Download and install node.js.  
  2.add Package.json (npm init).  
  2.global install gulp (npm install --global gulp).  
  3.devDependencies install gulp (npm install --save-dev gulp).  
  4.add gulpfile.js ()  
    example:gulpfile1.js  
  finally:    
    // rel="stylesheet" href="./styles/test_0ede2cf.css" type="text/css"   
    // src="./scripts/test_8ced4e6.js" type="text/javascript"   
## (2):
  1.Download and install node.js.  
  2.add Package.json (npm init).  
  2.global install gulp (npm install --global gulp).  
  3.devDependencies install gulp (npm install --save-dev gulp).  
  4.edit node_modules\gulp-assets-rev\index.js in var verStr = (options.verConnecter || "")+md5;  
    after edit:  
    var verStr = (options.verConnecter || "-") + md5;  
				src=src+"?v="+verStr;  
        //src = src.replace(verStr, '').replace(/(\.[^\.]+)$/, verStr + "$1");  
  5.add gulpfile.js ()  
    example:gulpfile1.js  
  finally:  
    // href="../css/index.css?v=-6bf2ddf" rel="stylesheet"   
    // src="../scripts/index.js?v=-9df0888"  
## friendship link
  1.[http://www.cnblogs.com/hutuzhu/p/5276000.html](http://www.cnblogs.com/hutuzhu/p/5276000.html)      
  
  2.[http://www.reqianduan.com/3015.html](http://www.reqianduan.com/3015.html)
  
