"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";

type ContactFormModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  content: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactFormModal({ open, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    content: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      setStatus("success");
      setFormData({ name: "", email: "", content: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "送信に失敗しました"
      );
    }
  };

  const handleClose = () => {
    if (status !== "submitting") {
      setStatus("idle");
      setErrorMessage("");
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose} title="お問い合わせフォーム">
      {status === "success" ? (
        <div className="py-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-lime/20">
            <svg
              className="h-8 w-8 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="font-heading text-xl font-bold text-text-main">
            送信完了
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-text-sub">
            お問い合わせありがとうございます。
            <br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-6 rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            閉じる
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-text-main"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="山田 太郎"
              className="w-full rounded-2xl border border-base-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-text-sub/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-text-main"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full rounded-2xl border border-base-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-text-sub/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-1.5 block text-sm font-medium text-text-main"
            >
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={5}
              value={formData.content}
              onChange={handleChange}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full resize-none rounded-2xl border border-base-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-text-sub/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          {status === "error" && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              disabled={status === "submitting"}
              className="flex-1 rounded-full border border-base-border bg-white px-4 py-3 text-sm font-medium text-text-main transition hover:bg-base-bg disabled:opacity-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-yellow px-4 py-3 text-sm font-medium text-text-main shadow-soft transition hover:opacity-90 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  送信中...
                </>
              ) : (
                "送信する"
              )}
            </button>
          </div>

          <p className="text-center text-xs text-text-sub">
            送信いただいた内容は、お問い合わせ対応のみに使用いたします。
          </p>
        </form>
      )}
    </Modal>
  );
}
