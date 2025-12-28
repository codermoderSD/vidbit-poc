const course = {
  id: 1,
  title: "Operating Systems Fundamentals: Memory Management Deep Dive",
  instructor: "Dr. Sarah Chen",
  price: 149,
  originalPrice: 199,
  rating: 4.8,
  students: 12459,
  videoUrl:
    "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-14-09_00-16-02.mp4",
  description:
    "Master the fundamentals of operating systems with hands-on examples and real-world scenarios. Learn how memory management, paging, and virtual memory work at a deep technical level.",
  curriculum: [
    {
      section: "Introduction to Memory Management",
      lessons: [
        "Course Overview",
        "Memory Hierarchy Basics",
        "Physical vs Virtual Memory",
      ],
      duration: "45 min",
    },
    {
      section: "Paging and Page Tables",
      lessons: [
        "Understanding Paging",
        "Page Table Structures",
        "Multi-level Page Tables",
        "Translation Lookaside Buffer (TLB)",
      ],
      duration: "2 hours",
    },
    {
      section: "Virtual Memory Deep Dive",
      lessons: [
        "Virtual Address Spaces",
        "MMU and Address Translation",
        "Page Faults and Handling",
      ],
      duration: "1.5 hours",
    },
    {
      section: "Advanced Topics",
      lessons: [
        "Segmentation",
        "Memory Protection",
        "Swapping and Page Replacement",
      ],
      duration: "2 hours",
    },
  ],
  sampleQuestions: [
    {
      question:
        "How does the MMU traverse a two-level hierarchical page table to find a physical address?",
      category: "how",
      start_timestamp: "14:09",
      end_timestamp: "16:02",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-14-09_00-16-02.mp4",
    },
    {
      question:
        "How is the number of page table levels calculated for a 48-bit virtual address space?",
      category: "how",
      start_timestamp: "16:35",
      end_timestamp: "20:22",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-16-35_00-20-22.mp4",
    },
    {
      question:
        "How does the OS construct the virtual address space and page tables when a new process is created?",
      category: "how",
      start_timestamp: "21:14",
      end_timestamp: "24:08",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-21-14_00-24-08.mp4",
    },
    {
      question:
        "How does a linear page table translate a 32-bit virtual address into a physical address?",
      category: "how",
      start_timestamp: "5:58",
      end_timestamp: "7:55",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-05-58_00-07-55.mp4",
    },
    {
      question:
        "How does the heap manager handle `malloc` requests by splitting page-sized chunks from the OS?",
      category: "how",
      start_timestamp: "25:56",
      end_timestamp: "27:38",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-25-56_00-27-38.mp4",
    },
    {
      question:
        "What is the performance penalty (in terms of memory accesses) of a 4-level page table upon a TLB miss?",
      category: "what",
      start_timestamp: "20:31",
      end_timestamp: "21:07",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-20-31_00-21-07.mp4",
    },
    {
      question:
        "What information is stored in a Page Table Entry (PTE) in addition to the physical frame number?",
      category: "what",
      start_timestamp: "4:25",
      end_timestamp: "5:47",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-04-25_00-05-47.mp4",
    },
    {
      question:
        "What is the size of a linear page table for a 32-bit system with 4KB pages, and why is it problematic?",
      category: "what",
      start_timestamp: "8:35",
      end_timestamp: "9:56",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-08-35_00-09-56.mp4",
    },
    {
      question:
        "What is the difference between the `brk`/`sbrk` system calls and `mmap` regarding where memory is allocated?",
      category: "what",
      start_timestamp: "29:13",
      end_timestamp: "31:15",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-29-13_00-31-15.mp4",
    },
    {
      question:
        "What is a slab allocator and what specific workload does it optimize?",
      category: "what",
      start_timestamp: "31:41",
      end_timestamp: "33:11",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-31-41_00-33-11.mp4",
    },
    {
      question:
        "Where in physical memory are the chunks of a large page table stored to avoid requiring contiguous space?",
      category: "where",
      start_timestamp: "10:06",
      end_timestamp: "10:42",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-10-06_00-10-42.mp4",
    },
    {
      question:
        "Where in the virtual address space does `mmap` allocate memory compared to `brk`/`sbrk`?",
      category: "where",
      start_timestamp: "29:13",
      end_timestamp: "30:44",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-29-13_00-30-44.mp4",
    },
    {
      question:
        "Where does the MMU look to find the starting location of a hierarchical page table structure?",
      category: "where",
      start_timestamp: "11:11",
      end_timestamp: "11:45",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-11-11_00-11-45.mp4",
    },
    {
      question:
        "Where are shared software components (like the OS code or C library) mapped in a process's virtual address space?",
      category: "where",
      start_timestamp: "1:14",
      end_timestamp: "2:11",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-01-14_00-02-11.mp4",
    },
    {
      question:
        'Where do "gaps" appear in a process\'s virtual address space and what is their purpose?',
      category: "where",
      start_timestamp: "24:59",
      end_timestamp: "25:45",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-24-59_00-25-45.mp4",
    },
    {
      question:
        "Why is it necessary to split the page table into chunks (hierarchical paging) rather than keeping it as a single array?",
      category: "why",
      start_timestamp: "9:56",
      end_timestamp: "11:45",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-09-56_00-11-45.mp4",
    },
    {
      question:
        "Why is a TLB hit significantly more critical in systems with multi-level page tables (e.g., 64-bit)?",
      category: "why",
      start_timestamp: "20:50",
      end_timestamp: "21:07",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-20-50_00-21-07.mp4",
    },
    {
      question:
        "Why does a standard heap allocator (`malloc`) often have higher overhead compared to a slab allocator?",
      category: "why",
      start_timestamp: "31:50",
      end_timestamp: "33:01",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-31-50_00-33-01.mp4",
    },
    {
      question:
        'Why does the operating system leave invalid "gaps" in the virtual address space between the heap and stack?',
      category: "why",
      start_timestamp: "25:35",
      end_timestamp: "25:56",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-25-35_00-25-56.mp4",
    },
    {
      question:
        "Why might an advanced application choose to bypass the heap and use `mmap` directly?",
      category: "why",
      start_timestamp: "33:16",
      end_timestamp: "33:54",
      file_name:
        "https://vidbit.s3.ap-south-1.amazonaws.com/paging_snippets/00-33-16_00-33-54.mp4",
    },
  ],
};

export default course;
