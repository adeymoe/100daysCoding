function removeUrlAnchor(url){
    // first check if url contains #
    if(url.includes("#")) {
      // 1st parameter start at: index 0
      // 2nd parameter end at: index of #
      const routelessUrl = url.substring(0, url.indexOf('#'));
      return routelessUrl;
    }
    return url;
  }


  const removeUrlAnchor = (url) => url.split("#")[0];