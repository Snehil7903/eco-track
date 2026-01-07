import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Card className="w-87.5">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Register</Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-green-600" to="/login">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
