package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AccountsScreen(onCreate:()->Unit){Card{Column{Text("Accounts");Text("Domain-specific accounts workflow");Button(onClick=onCreate){Text("Create")}}}}
