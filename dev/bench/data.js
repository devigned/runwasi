window.BENCHMARK_DATA = {
  "lastUpdate": 1740615002078,
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
        "date": 1740615001449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14752,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2592 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18044,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3196 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19004,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3132 kB"
          }
        ]
      }
    ],
    "Stress Test Benchmark": [
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
        "date": 1740529893455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.13889404550058,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 554ms 587us 925ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.08618188331019,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 501ms 248us 820ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.696654593896886,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 42ms 695us 949ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.024523224078331,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 557ms 852us 458ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.900457342840255,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 99ms 935us 123ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.243325339666985,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 65ms 147us 62ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.402597237118144,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 612ms 404us 22ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.95407937005779,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 255ms 40us 730ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.83994074227013,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 683ms 926us 327ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.90967806019118,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 349ms 409us 928ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.89337640299494,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 919ms 292us 581ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.23887043077491,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 580ms 637us 906ns"
          }
        ]
      }
    ]
  }
}