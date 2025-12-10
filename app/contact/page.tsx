"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("전송에 실패했습니다.");
      }

      setSubmitStatus({
        type: "success",
        message: "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });
      form.reset();
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1A2D47] py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
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
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
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
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
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

                {/* File Upload Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>파일 첨부가 필요하신 경우:</strong>
                    <br />
                    도면, 사진, 스펙시트 등의 파일은 답변 이메일에 첨부하여 회신해주시면 더욱 정확한 상담이 가능합니다.
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">전화 문의</p>
                <p className="text-white font-semibold">02-575-3051</p>
              </div>
            </a>

            <a
              href="mailto:sales@raontotalsolution.co.kr"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">이메일 문의</p>
                <p className="text-white font-semibold text-sm sm:text-base break-all">
                  sales@raontotalsolution.co.kr
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
    </main>
  );
}
