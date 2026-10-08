package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun StaffScreen(onCreate:()->Unit){Card{Column{Text("Staff");Text("Domain-specific staff workflow");Button(onClick=onCreate){Text("Create")}}}}
