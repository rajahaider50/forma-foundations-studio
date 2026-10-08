package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun SalesScreen(onCreate:()->Unit){Card{Column{Text("Sales");Text("Domain-specific sales workflow");Button(onClick=onCreate){Text("Create")}}}}
