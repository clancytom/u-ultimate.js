<a name="1.0.2"></a>
# 1.0.2 meteoric-mining (2021-12-10)

## Bug Fixes
- **$sceDelegate:** ensure that `resourceUrlWhitelist()` is identical `trustedResourceUrlList()`
  ([13f66a](https://github.com/clancytom/u-ultimate.js/commit/13f66a9478ca3057c9875e09bcf0cddf99e928d5),
  [#32](https://github.com/clancytom/u-ultimate.js/issues/32))
- **$sanitize:** do not trigger CSP alert/report in Firefox and Chrome
  ([f3bca05](https://github.com/clancytom/u-ultimate.js/commit/f3bca054a646d01179082fc5b5e2857c5f5e5b6b))

<a name="1.0.1"></a>
# 1.0.1 mutually-supporting (2021-12-07)

## Bug Fixes
- **$sanitize:** do not trigger CSP alert/report in Firefox and Chrome
  ([c21b5e37](https://github.com/clancytom/u-ultimate.js/commit/c21b5e37f2f5e80e3b1dca439dd8fbc495f41dc0))

## Refactorings

- **SanitizeUriProvider:** remove usages of whitelist
  ([57c8eb1e3](https://github.com/clancytom/u-ultimate.js/commit/57c8eb1e37695bce3bb1b1e0e3f907d4d027dedc))
- **httpProvider:** remove usages of whitelist and blacklist
  ([074f56eb](https://github.com/clancytom/u-ultimate.js/commit/074f56eb22847d8f34eee8ba9e22894456e5b521))
- **sceDelegateProvider:** remove usages of whitelist and blacklist
  ([81ffe0be](https://github.com/clancytom/u-ultimate.js/commit/81ffe0bece6e7e652cd209708ca509ed5880d3ef))

## Deprecation Notices

- Deprecated ~~`$compileProvider.aHrefSanitizationWhitelist`~~.
  It is now [aHrefSanitizationTrustedUrlList](https://docs.angularjs.org/api/ng/provider/$compileProvider#aHrefSanitizationTrustedUrlList)`.
- Deprecated ~~`$compileProvider.imgSrcSanitizationWhitelist`~~.
  It is now [imgSrcSanitizationTrustedUrlList](https://docs.angularjs.org/api/ng/provider/$compileProvider#imgSrcSanitizationTrustedUrlList).
- Deprecated ~~`$httpProvider.xsrfWhitelistedOrigins`~~.
  It is now [xsrfTrustedOrigins](https://docs.angularjs.org/api/ng/provider/$httpProvider#xsrfTrustedOrigins).
- Deprecated ~~`$sceDelegateProvider.resourceUrlWhitelist`~~.
  It is now [trustedResourceUrlList](https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider#trustedResourceUrlList).
- Deprecated ~~`$sceDelegateProvider.resourceUrlBlacklist`~~.
  It is now [bannedResourceUrlList](https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider#bannedResourceUrlList).


For the purposes of backward compatibility, the previous symbols are aliased to their new symbol.


<a name="1.0.0"></a>
# 1.0.0 nested-vaccination (2021-17-07)

## Bug Fixes

## Breaking Changes
