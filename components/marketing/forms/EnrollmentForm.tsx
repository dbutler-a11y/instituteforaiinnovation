"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface EnrollmentFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredStartDate: string
  fundingSource: string
  hasHighSchoolDiploma: boolean
  agreeToTerms: boolean
}

export function EnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<EnrollmentFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredStartDate: "",
    fundingSource: "",
    hasHighSchoolDiploma: false,
    agreeToTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: keyof EnrollmentFormData, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, fundingSource: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast.error("Please enter your first name")
      return false
    }
    if (!formData.lastName.trim()) {
      toast.error("Please enter your last name")
      return false
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return false
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number")
      return false
    }
    if (!formData.hasHighSchoolDiploma) {
      toast.error("You must have a GED or High School Diploma to enroll")
      return false
    }
    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms and conditions")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enrollment application")
      }

      toast.success("Application submitted successfully! We'll be in touch soon.")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredStartDate: "",
        fundingSource: "",
        hasHighSchoolDiploma: false,
        agreeToTerms: false,
      })
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit application")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
        <CardTitle className="text-2xl">Enrollment Application</CardTitle>
        <CardDescription className="text-blue-50">
          Join the Institute for AI Innovation and start your journey in AI
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredStartDate">Preferred Start Date</Label>
            <Input
              id="preferredStartDate"
              name="preferredStartDate"
              type="date"
              value={formData.preferredStartDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fundingSource">
              Funding Source <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.fundingSource} onValueChange={handleSelectChange}>
              <SelectTrigger id="fundingSource">
                <SelectValue placeholder="Select funding source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self-pay">Self-Pay</SelectItem>
                <SelectItem value="wioa">WIOA/Workforce Voucher</SelectItem>
                <SelectItem value="employer">Employer Sponsored</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="hasHighSchoolDiploma"
                checked={formData.hasHighSchoolDiploma}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("hasHighSchoolDiploma", checked as boolean)
                }
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor="hasHighSchoolDiploma"
                  className="font-normal cursor-pointer"
                >
                  I have a GED or High School Diploma{" "}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("agreeToTerms", checked as boolean)
                }
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor="agreeToTerms"
                  className="font-normal cursor-pointer"
                >
                  I agree to the terms and conditions{" "}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
