package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AttendanceScreen(onCreate:()->Unit){Card{Column{Text("Attendance");Text("Domain-specific attendance workflow");Button(onClick=onCreate){Text("Create")}}}}
