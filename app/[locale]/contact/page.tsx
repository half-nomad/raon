"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Home, Phone, Mail, Paperclip, X, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Location } from "@/components/company/location";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Form validation schema
const contactFormSchema = z.object({
  category: z.string({
    message: "문의 구분을 선택해주세요.",
  }).min(1, {
    message: "문의 구분을 선택해주세요.",
  }),
  name: z.string().min(2, {
    message: "이름은 최소 2자 이상 입력해주세요.",
  }),
  company: z.string().min(2, {
    message: "회사명을 입력해주세요.",
  }),
  email: z.string().email({
    message: "올바른 이메일 주소를 입력해주세요.",
  }),
  phone: z.string().min(9, {
    message: "올바른 전화번호를 입력해주세요.",
  }),
  message: z.string().min(10, {
    message: "문의 내용은 최소 10자 이상 입력해주세요.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// 허용 파일 타입
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 3;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 검증 함수
  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `${file.name}: 지원하지 않는 파일 형식입니다. (PDF, 이미지, Word 문서만 가능)`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `${file.name}: 파일 크기가 5MB를 초과합니다.`;
    }
    return null;
  };

  // 파일 추가 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFileError(null);

    if (files.length + selectedFiles.length > MAX_FILES) {
      setFileError(`최대 ${MAX_FILES}개의 파일만 첨부할 수 있습니다.`);
      return;
    }

    for (const file of selectedFiles) {
      const error = validateFile(file);
      if (error) {
        setFileError(error);
        return;
      }
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 파일 제거 핸들러
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError(null);
  };

  // 파일 아이콘 선택
  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) {
      return <ImageIcon className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  };

  // 파일 크기 포맷
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      category: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      formData.append("category", data.category);
      formData.append("name", data.name);
      formData.append("company", data.company);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      // 파일 추가
      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("전송에 실패했습니다.");
      }

      setSubmitStatus({
        type: "success",
        message: "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });
      form.reset();
      setFiles([]);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "전송 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              궁금하신 사항이 있으신 경우 문의내용을 작성해 주시면
              <br className="hidden sm:block" />
              빠른 시일 안에 답변드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus.type === "success" ? (
            /* Success Message */
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-4">
                문의가 성공적으로 전송되었습니다
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                빠른 시일 내에 답변드리겠습니다.
                <br />
                소중한 문의 감사합니다.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] hover:bg-[#1A2D47] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                메인 홈으로 돌아가기
              </a>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6">
                문의하기
              </h2>

              {/* Error Message */}
              {submitStatus.type === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                  {submitStatus.message}
                </div>
              )}

              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Category */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A1628] font-semibold">
                        구분 <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]">
                            <SelectValue placeholder="문의 구분을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="compressor-valve">압축기밸브</SelectItem>
                          <SelectItem value="compressor-ring">압축기 링&패킹</SelectItem>
                          <SelectItem value="frame-parts">프레임부품</SelectItem>
                          <SelectItem value="repair-service">수리서비스</SelectItem>
                          <SelectItem value="materials">소재</SelectItem>
                          <SelectItem value="general">일반문의</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-semibold">
                          이름 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="홍길동"
                            className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-semibold">
                          회사명 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(주)회사명"
                            className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-semibold">
                          이메일 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@company.com"
                            className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-semibold">
                          전화번호 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="010-1234-5678"
                            className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A1628] font-semibold">
                        문의 내용 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="문의하실 내용을 상세히 작성해주세요&#10;&#10;예시:&#10;- 제품명/모델명&#10;- 필요 수량&#10;- 납기 일정&#10;- 기타 요구사항"
                          className="min-h-[200px] border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Upload */}
                <div className="space-y-3">
                  <label className="text-[#0A1628] font-semibold block">
                    파일 첨부 <span className="text-gray-400 font-normal">(선택)</span>
                  </label>

                  {/* 파일 선택 버튼 */}
                  <div className="flex items-center gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp"
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={files.length >= MAX_FILES}
                      className="h-12 px-6 border-gray-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
                    >
                      <Paperclip className="w-4 h-4 mr-2" />
                      파일 선택
                    </Button>
                    <span className="text-sm text-gray-500">
                      {files.length}/{MAX_FILES}개 첨부됨
                    </span>
                  </div>

                  {/* 파일 목록 */}
                  {files.length > 0 && (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center text-[#3B82F6]">
                              {getFileIcon(file.type)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 파일 에러 메시지 */}
                  {fileError && (
                    <p className="text-sm text-red-600">{fileError}</p>
                  )}

                  {/* 안내 문구 */}
                  <p className="text-xs text-gray-500">
                    PDF, 이미지(JPG, PNG, GIF, WebP), Word 문서 첨부 가능 (파일당 최대 5MB, 최대 3개)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold text-lg rounded-full transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "전송 중..." : "문의하기"}
                </Button>
              </form>
            </Form>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a
              href="tel:02-575-3051"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#0A1628] to-[#1A2D47] rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">전화 문의</p>
                <p className="text-white font-semibold">02-575-3051</p>
              </div>
            </a>

            <a
              href="mailto:rts@raontotalsolution.co.kr"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">이메일 문의</p>
                <p className="text-white font-semibold text-sm sm:text-base break-all">
                  rts@raontotalsolution.co.kr
                </p>
              </div>
            </a>
            </div>
            </div>
          )}
        </div>
      </section>

      {/* Location Section */}
      <Location />

      <Footer />
    </main>
  );
}
