# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-09-15)

<section class="features">

### Features

-   [`5f8f798`](https://github.com/stdlib-js/stdlib/commit/5f8f798b9a8345f41975c6bcc7a580c58fd02f74) - add `fft/base/fftpack/float32/decompose` [(#14482)](https://github.com/stdlib-js/stdlib/pull/14482)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`be6f218`](https://github.com/stdlib-js/stdlib/commit/be6f2184b1659459908028947ab7404588e9a37d) - remove float32 emulation

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`a697555`](https://github.com/stdlib-js/stdlib/commit/a697555175a55d741bf5716b425a1b735b8de8c2): migrate from `Float32Array` to `Uint32Array`

    -   To migrate, users should replace providing a `Float32Array` with a `Uint32Array`. Doing so enables support for longer sequences.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`7099552`](https://github.com/stdlib-js/stdlib/commit/7099552f0144bc0c4ab8aa5afc68796d14b469a6) - **docs:** remove duplicate lines [(#15246)](https://github.com/stdlib-js/stdlib/pull/15246) _(by Gunj Joshi)_
-   [`a697555`](https://github.com/stdlib-js/stdlib/commit/a697555175a55d741bf5716b425a1b735b8de8c2) - **refactor:** update `fft/base/fftpack/float32/decompose` to use integer array view [(#15224)](https://github.com/stdlib-js/stdlib/pull/15224) _(by Gunj Joshi, Athan Reines)_
-   [`be6f218`](https://github.com/stdlib-js/stdlib/commit/be6f2184b1659459908028947ab7404588e9a37d) - **fix:** remove float32 emulation _(by Athan Reines)_
-   [`5f8f798`](https://github.com/stdlib-js/stdlib/commit/5f8f798b9a8345f41975c6bcc7a580c58fd02f74) - **feat:** add `fft/base/fftpack/float32/decompose` [(#14482)](https://github.com/stdlib-js/stdlib/pull/14482) _(by Gunj Joshi)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

