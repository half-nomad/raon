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
import { useTranslations } from "next-intl";

// Type for translation function
type TranslationFunction = ReturnType<typeof useTranslations>;

// Form validation schema - will be created dynamically with translations
const createContactFormSchema = (t: TranslationFunction) => z.object({
  category: z.string({
    message: t("validation.categoryRequired"),
  }).min(1, {
    message: t("validation.categoryRequired"),
  }),
  name: z.string().min(2, {
    message: t("validation.nameMin"),
  }),
  company: z.string().min(2, {
    message: t("validation.companyRequired"),
  }),
  email: z.string().email({
    message: t("validation.emailInvalid"),
  }),
  phone: z.string().min(9, {
    message: t("validation.phoneInvalid"),
  }),
  message: z.string().min(10, {
    message: t("validation.messageMin"),
  }),
});

type ContactFormValues = {
  category: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

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
  const t = useTranslations("contact");
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
      return `${file.name}: ${t("validation.fileTypeInvalid")}`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `${file.name}: ${t("validation.fileSizeExceeded")}`;
    }
    return null;
  };

  // 파일 추가 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFileError(null);

    if (files.length + selectedFiles.length > MAX_FILES) {
      setFileError(t("validation.fileCountExceeded", { max: MAX_FILES }));
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
    resolver: zodResolver(createContactFormSchema(t)),
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
        throw new Error(t("error.submitFailed"));
      }

      setSubmitStatus({
        type: "success",
        message: t("success.message"),
      });
      form.reset();
      setFiles([]);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("error.submitFailed"),
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
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              {t("hero.description")}
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
                {t("success.title")}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                {t("success.message")}
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] hover:bg-[#1A2D47] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                {t("success.backHome")}
              </a>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6">
                {t("form.title")}
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
                        {t("form.category.label")} <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6]">
                            <SelectValue placeholder={t("form.category.placeholder")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="visit-consulting">{t("form.category.options.visitConsulting")}</SelectItem>
                          <SelectItem value="compressor">{t("form.category.options.compressor")}</SelectItem>
                          <SelectItem value="mixer">{t("form.category.options.mixer")}</SelectItem>
                          <SelectItem value="motor">{t("form.category.options.motor")}</SelectItem>
                          <SelectItem value="pump">{t("form.category.options.pump")}</SelectItem>
                          <SelectItem value="bearing">{t("form.category.options.bearing")}</SelectItem>
                          <SelectItem value="cylinder-liner">{t("form.category.options.cylinderLiner")}</SelectItem>
                          <SelectItem value="oil-purifier">{t("form.category.options.oilPurifier")}</SelectItem>
                          <SelectItem value="general">{t("form.category.options.general")}</SelectItem>
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
                          {t("form.name.label")} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("form.name.placeholder")}
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
                          {t("form.company.label")} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("form.company.placeholder")}
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
                          {t("form.email.label")} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("form.email.placeholder")}
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
                          {t("form.phone.label")} <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t("form.phone.placeholder")}
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
                        {t("form.message.label")} <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("form.message.placeholder")}
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
                    {t("form.file.label")} <span className="text-gray-400 font-normal">({t("form.file.optional")})</span>
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
                      {t("form.file.selectButton")}
                    </Button>
                    <span className="text-sm text-gray-500">
                      {files.length}/{MAX_FILES}{t("form.file.attached")}
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
                    {t("form.file.help")}
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold text-lg rounded-full transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                </Button>
              </form>
            </Form>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a
              href={`tel:${t("info.phone.value")}`}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#0A1628] to-[#1A2D47] rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">{t("info.phone.label")}</p>
                <p className="text-white font-semibold">{t("info.phone.value")}</p>
              </div>
            </a>

            <a
              href={`mailto:${t("info.email.value")}`}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">{t("info.email.label")}</p>
                <p className="text-white font-semibold text-sm sm:text-base break-all">
                  {t("info.email.value")}
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
