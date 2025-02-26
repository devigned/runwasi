window.BENCHMARK_DATA = {
  "lastUpdate": 1740529447688,
  "repoUrl": "https://github.com/devigned/runwasi",
  "entries": {
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d11cefbcc674bbbc032c422046106329a0b22ff4",
          "message": "Merge pull request #856 from dblnz/add-mdbook\n\nInitial work to add a mdbook documentation style",
          "timestamp": "2025-02-25T20:04:59Z",
          "url": "https://github.com/devigned/runwasi/commit/d11cefbcc674bbbc032c422046106329a0b22ff4"
        },
        "date": 1740529331716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20395.7362,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d11cefbcc674bbbc032c422046106329a0b22ff4",
          "message": "Merge pull request #856 from dblnz/add-mdbook\n\nInitial work to add a mdbook documentation style",
          "timestamp": "2025-02-25T20:04:59Z",
          "url": "https://github.com/devigned/runwasi/commit/d11cefbcc674bbbc032c422046106329a0b22ff4"
        },
        "date": 1740529333217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      }
    ],
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d11cefbcc674bbbc032c422046106329a0b22ff4",
          "message": "Merge pull request #856 from dblnz/add-mdbook\n\nInitial work to add a mdbook documentation style",
          "timestamp": "2025-02-25T20:04:59Z",
          "url": "https://github.com/devigned/runwasi/commit/d11cefbcc674bbbc032c422046106329a0b22ff4"
        },
        "date": 1740529334800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14880,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2720 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66116,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12484 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18172,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3324 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18880,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3008 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d11cefbcc674bbbc032c422046106329a0b22ff4",
          "message": "Merge pull request #856 from dblnz/add-mdbook\n\nInitial work to add a mdbook documentation style",
          "timestamp": "2025-02-25T20:04:59Z",
          "url": "https://github.com/devigned/runwasi/commit/d11cefbcc674bbbc032c422046106329a0b22ff4"
        },
        "date": 1740529447151,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135520913,
            "range": "± 1945752",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78649679,
            "range": "± 936165",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110663855,
            "range": "± 1833777",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120623440,
            "range": "± 2199040",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129775675,
            "range": "± 3045765",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132287899,
            "range": "± 1116455",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81028233,
            "range": "± 1529643",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83259052,
            "range": "± 1575413",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}