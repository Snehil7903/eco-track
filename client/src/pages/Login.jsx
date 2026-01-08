import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
  login(email, "citizen"); // later backend decides role
  navigate("/dashboard");
  };


  return (
    <Card className="w-87.5">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="password" placeholder="Password" />
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link className="text-green-600" to="/register">
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
